from django.db import models

# Create your models here.
from django.db import models

class Activity(models.Model):
    ActivityID = models.IntegerField(primary_key=True)
    ActivityName = models.CharField(max_length=255)
    Description = models.TextField()
    Category = models.CharField(max_length=255)

class Event(models.Model):
    EventID = models.IntegerField(primary_key=True)
    Status = models.CharField(max_length=20)
    Location = models.CharField(max_length=255)
    Date = models.DateField()
    Time = models.TimeField()
    CreationDate = models.DateTimeField(auto_now_add=True)

class Conversation(models.Model):
    ConversationID = models.IntegerField(primary_key=True)
    CreationDate = models.DateTimeField(auto_now_add=True)

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
    Activities = models.ManyToManyField(Activity)
    Events = models.ManyToManyField(Event)
    Conversations = models.ManyToManyField(Conversation)

class Message(models.Model):
    MessageID = models.IntegerField(primary_key=True)
    ConversationID = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    Content = models.TextField()
    Timestamp = models.DateTimeField(auto_now_add=True)
    Status = models.CharField(max_length=20)

class Review(models.Model):
    ReviewID = models.IntegerField(primary_key=True)
    UserID = models.ForeignKey(User, on_delete=models.CASCADE)
    LastName = models.CharField(max_length=255)
    FirstName = models.CharField(max_length=255)
    Rating = models.IntegerField()
    Comment = models.TextField()
    Timestamp = models.DateTimeField(auto_now_add=True)