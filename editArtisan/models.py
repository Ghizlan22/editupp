from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver

gender_choices={
    ('Male', 'Male'),
    ('Female','Female'),
}
job_choices = {
    ('Jeweler', 'Jeweler'),
    ('Baker', 'Baker'),
    ('Embroiderer', 'Embroiderer'),
    ('Tiler', 'Tiler'),
    ('Painter', 'Painter'),
    ('Heating engineer', 'Heating engineer'),
    ('Shoemaker', 'Shoemaker'),
    ('Hairdresser', 'Hairdresser'),
    ('Cutler', 'Cutler'),
    ('Cook', 'Cook'),
    ('Roofer', 'Roofer'),
    ('Furniture maker', 'Furniture maker'),
    ('Soap maker', 'Soap maker'),
    ('Food products maker', 'Food products maker'),
    ('Musical instrument maker', 'Musical instrument maker'),
    ('Blacksmith', 'Blacksmith'),
    ('Florist', 'Florist'),
    ('Watchmaker', 'Watchmaker'),
    ('Mason', 'Mason'),
    ('Leatherworker', 'Leatherworker'),
    ('Carpenter', 'Carpenter'),
    ('Pastry chef', 'Pastry chef'),
    ('Plumber', 'Plumber'),
    ('Potter', 'Potter'),
    ('Bookbinder', 'Bookbinder'),
    ('Tailor', 'Tailor'),
    ('Weaver', 'Weaver'),
    ('Basket weaver', 'Basket weaver'),
    ('Glassblower', 'Glassblower'),
    ('Electrician', 'Electrician'),
    ('Stained glass artisan', 'Stained glass artisan'),
    ('Wood Turner', 'Wood Turner'),
    ('Baby Sitter', 'Baby Sitter'),
    ('Other', 'Other')
}

wilaya_choices = {
    ('Adrar', 'Adrar'),
    ('Chlef', 'Chlef'),
    ('Laghouat', 'Laghouat'),
    ('Oum El Bouaghi', 'Oum El Bouaghi'),
    ('Batna', 'Batna'),
    ('Bejaia', 'Bejaia'),
    ('Biskra', 'Biskra'),
    ('Bechar', 'Bechar'),
    ('Blida', 'Blida'),
    ('Bouira', 'Bouira'),
    ('Tamanrasset', 'Tamanrasset'),
    ('Tebessa', 'Tebessa'),
    ('Tlemcen', 'Tlemcen'),
    ('Tiaret', 'Tiaret'),
    ('Tizi Ouzou', 'Tizi Ouzou'),
    ('Algiers', 'Algiers'),
    ('Djelfa', 'Djelfa'),
    ('Jijel', 'Jijel'),
    ('Setif', 'Setif'),
    ('Saïda', 'Saïda'),
    ('Skikda', 'Skikda'),
    ('Sidi Bel Abbes', 'Sidi Bel Abbes'),
    ('Annaba', 'Annaba'),
    ('Guelma', 'Guelma'),
    ('Constantine', 'Constantine'),
    ('Medea', 'Medea'),
    ('Mostaganem', 'Mostaganem'),
    ('Msila', 'Msila'),
    ('Mascara', 'Mascara'),
     ('Ouargla', 'Ouargla'),
    ('Oran', 'Oran'),
    ('El Bayadh', 'El Bayadh'),
    ('Illizi', 'Illizi'),
    ('Bordj Bou Arreridj', 'Bordj Bou Arreridj'),
    ('Boumerdes', 'Boumerdes'),
    ('El Tarf', 'El Tarf'),
    ('Tindouf', 'Tindouf'),
    ('Tissemsilt', 'Tissemsilt'),
    ('El Oued', 'El Oued'),
    ('Khenchela', 'Khenchela'),
    ('Souk Ahras', 'Souk Ahras'),
    ('Tipaza', 'Tipaza'),
    ('Mila', 'Mila'),
    ('Aïn Defla', 'Aïn Defla'),
    ('Naama', 'Naama'),
    ('Aïn Temouchent', 'Aïn Temouchent'),
    ('Ghardaia', 'Ghardaia'),
    ('Relizane', 'Relizane'),
    ('Timimoun', 'Timimoun'),
    ('Bordj Badji Mokhtar', 'Bordj Badji Mokhtar'),
    ('Ouled Djellal', 'Ouled Djellal'),
    ('Béni Abbès', 'Béni Abbès'),
     ('In Salah', 'In Salah'),
    ('In Guezzam', 'In Guezzam'),
    ('Touggourt', 'Touggourt'),
    ('Djanet', 'Djanet'),
    ('El M’Ghaier', 'El M’Ghaier'),
    ('El Meniaa', 'El Meniaa')
}

DAYS_OF_WEEK = {
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
        ('Sunday', 'Sunday')
}
satisfaction_choices =[
    ('yes','yes'),
    ('no','no')
]

class Artisan(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30,default='')
    last_name = models.CharField(max_length=30,default='')
    birth_day = models.IntegerField()
    birth_month = models.IntegerField()
    birth_year = models.IntegerField()
    gender = models.CharField(max_length=10, choices=gender_choices)
    email = models.EmailField(blank=True)
    phone_number = models.CharField(unique=True,max_length=10)
    address = models.CharField(max_length=50)
    job = models.CharField(max_length=30, choices=job_choices)
    wilaya = models.CharField(max_length=20, choices=wilaya_choices)
    description = models.TextField()
    pictures = models.ImageField(upload_to='artisan__pictures/', blank=True, null=True)
    licenses_certifications = models.FileField(upload_to='artisan_licenses/', blank=True, null=True)
    total_sat = models.IntegerField(default=0)
    total_stars = models.IntegerField(default=0)
    total_comments = models.IntegerField(default=0)
    total_interactions= models.IntegerField(default=0) 
    total_reviews=models.IntegerField(default=0)


    def __str__(self):
        return self.first_name + " " + self.last_name 

    @property
    def date_of_birth(self):
        # Construct the date from the separate fields
        from datetime import date
        return date( self.birth_day,self.birth_year, self.birth_month)
    

class WorkHours(models.Model):
    end_minute = models.PositiveSmallIntegerField()

class Rating(models.Model):
        unique_together = (('artisan', 'user'),)


class Satisfaction(models.Model):
    artisan = models.ForeignKey(Artisan, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    satisfaction = models.CharField(max_length=3, choices=satisfaction_choices)

class Comment(models.Model):
    created_at = models.DateTimeField(default=timezone.now)





class UserEmail(models.Model):
    email = models.EmailField(unique=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    image = models.ImageField(upload_to='profile_images/', null=True, blank=True, default='images/d07ba6dcf05fa86c0a61855bc722cb7a.jpg')
    
    def __str__(self):
        return str(self.user)
 
@receiver(post_save , sender = User)   
def create_user_profile(sender,instance,created, **kwargs):
    if created : 
        Profile.objects.create(
            user = instance
        )

