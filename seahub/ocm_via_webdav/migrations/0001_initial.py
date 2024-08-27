# Generated by Django 4.2.2 on 2024-08-27 14:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ReceivedShares',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=255, null=True)),
                ('name', models.CharField(max_length=255)),
                ('owner', models.CharField(db_index=True, max_length=255)),
                ('owner_display_name', models.CharField(blank=True, max_length=255, null=True)),
                ('protocol_name', models.CharField(max_length=255)),
                ('shared_secret', models.CharField(db_index=True, max_length=255)),
                ('permissions', models.CharField(max_length=255)),
                ('provider_id', models.CharField(db_index=True, max_length=255)),
                ('resource_type', models.CharField(db_index=True, max_length=255)),
                ('share_type', models.CharField(db_index=True, max_length=255)),
                ('share_with', models.CharField(db_index=True, max_length=255)),
                ('shared_by', models.CharField(db_index=True, max_length=255)),
                ('shared_by_display_name', models.CharField(blank=True, max_length=255, null=True)),
                ('ctime', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_dir', models.BooleanField(default=False)),
            ],
            options={
                'db_table': 'ocm_via_webdav_received_shares',
            },
        ),
    ]
