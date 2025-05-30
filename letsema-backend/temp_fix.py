import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()
from django.core.management import call_command
call_command('makemigrations', 'accounts')
call_command('makemigrations', 'loans')
call_command('makemigrations', 'credit')
call_command('migrate')
