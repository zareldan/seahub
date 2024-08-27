# Generated by Django 4.2.2 on 2024-08-27 14:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tags', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RelatedFiles',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('o_uuid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='o_uuid', to='tags.fileuuidmap')),
                ('r_uuid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='r_uuid', to='tags.fileuuidmap')),
            ],
        ),
    ]
