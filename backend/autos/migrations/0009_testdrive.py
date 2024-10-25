# Generated by Django 5.1.1 on 2024-10-22 16:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autos', '0008_alter_car_owner'),
        ('usuarios', '0002_alter_user_groups_alter_user_user_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestDrive',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_now_add=True)),
                ('car', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='autos.car')),
                ('userDrive', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuarios.user')),
            ],
        ),
    ]
