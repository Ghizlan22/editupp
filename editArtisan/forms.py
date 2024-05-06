from django import forms
from  django.contrib.auth.models import User
from .models import Artisan
class UserForm(forms.ModelForm):
   class Meta:
      model=User
      fields=['password ','email ','first_name ','last_name ']
class ArtisanForm(forms.ModelForm):
      class Meta:
            model=Artisan
            fields=['birth_day',' birth_month','birth_year','gender','phone_number','address','job','wilaya','description','pictures']
