# Generated by Django 5.1.1 on 2024-10-03 19:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('autos', '0004_car_num_tel'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='car',
            name='car_image',
        ),
    ]
