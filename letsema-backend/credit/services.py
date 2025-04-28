from .models import CreditRecord

class CreditHistoryManager:
    @staticmethod
    def update_credit_record(borrower_id, mfi_id, loan_data):
        record, created = CreditRecord.objects.get_or_create(
            borrower_id=borrower_id,
            mfi_id=mfi_id,
            defaults={'loan_history': [loan_data]}
        )
        if not created:
            record.loan_history.append(loan_data)
            record.total_loans += 1
            if loan_data.get('status') == 'DEFAULTED':
                record.default_count += 1
            record.save()

    @staticmethod
    def get_credit_score(borrower_id):
        records = CreditRecord.objects.filter(borrower_id=borrower_id)
        if not records.exists():
            return 300
        total_loans = sum(r.total_loans for r in records)
        default_rate = sum(r.default_count for r in records) / total_loans if total_loans > 0 else 0
        base_score = 300
        score = base_score + (total_loans * 10) - (default_rate * 500)
        return max(250, min(850, score))
