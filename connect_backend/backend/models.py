from django.db import models

# Create your models here.
from django.db import models

class User(models.Model):
    UserID = models.IntegerField(primary_key=True)
    Username = models.CharField(max_length=255)
    LastName = models.CharField(max_length=255)
    FirstName = models.CharField(max_length=255)
    Role = models.CharField(max_length=255)
    Email = models.EmailField(unique=True)
    Password = models.CharField(max_length=255)
    PhoneNumber = models.CharField(max_length=15)
    ProfilePicture = models.CharField(max_length=255)
    Gender = models.CharField(max_length=10)
    Interests = models.CharField(max_length=255)
    Location = models.CharField(max_length=255)
    Bio = models.TextField()
    RegistrationDate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Event(models.Model):
    EventID = models.IntegerField(primary_key=True)
    UserID = models.ForeignKey(User, on_delete=models.CASCADE)
    Status = models.CharField(max_length=20)
    Location = models.CharField(max_length=255)
    Date = models.DateField()
    Time = models.TimeField()
    CreationDate = models.DateTimeField(auto_now_add=True)
    Users = models.ManyToManyField(User)

    def __str__(self):
        return self.name

class Activity(models.Model):
    ActivityID = models.IntegerField(primary_key=True)
    UserID = models.ForeignKey(User, on_delete=models.CASCADE)
    ActivityName = models.CharField(max_length=255)
    Description = models.TextField()
    Category = models.CharField(max_length=255)
    Users = models.ManyToManyField(User)

    def __str__(self):
        return self.name

class Message(models.Model):
    MessageID = models.IntegerField(primary_key=True)
    ConversationID = models.IntegerField()
    Content = models.TextField()
    Timestamp = models.DateTimeField(auto_now_add=True)
    Status = models.CharField(max_length=20)
    def __str__(self):
        return self.name

class Conversation(models.Model):
    ConversationID = models.IntegerField(primary_key=True)
    EventID = models.ForeignKey(User, on_delete=models.CASCADE)
    CreationDate = models.DateTimeField(auto_now_add=True)
    Users = models.ManyToManyField(User)

    def __str__(self):
        return self.name

class Review(models.Model):
    ReviewID = models.IntegerField(primary_key=True)
    UserID = models.ForeignKey(User, on_delete=models.CASCADE)
    LastName = models.CharField(max_length=255)
    FirstName = models.CharField(max_length=255)
    Rating = models.IntegerField()
    Comment = models.TextField()
    Timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name