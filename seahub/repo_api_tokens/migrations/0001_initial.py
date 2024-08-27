# Generated by Django 4.2.2 on 2024-08-27 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RepoAPITokens',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('repo_id', models.CharField(db_index=True, max_length=36)),
                ('app_name', models.CharField(db_index=True, max_length=255)),
                ('token', models.CharField(max_length=40, unique=True)),
                ('generated_at', models.DateTimeField(auto_now_add=True)),
                ('generated_by', models.CharField(max_length=255)),
                ('last_access', models.DateTimeField(auto_now=True)),
                ('permission', models.CharField(max_length=15)),
            ],
            options={
                'db_table': 'repo_api_tokens',
            },
        ),
    ]
