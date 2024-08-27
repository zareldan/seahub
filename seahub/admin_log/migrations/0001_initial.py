# Generated by Django 4.2.2 on 2024-08-27 14:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AdminLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(db_index=True, max_length=254)),
                ('operation', models.CharField(db_index=True, max_length=255)),
                ('detail', models.TextField()),
                ('datetime', models.DateTimeField(default=datetime.datetime.now)),
            ],
            options={
                'ordering': ['-datetime'],
            },
        ),
    ]
