# Generated by Django 4.2.2 on 2024-08-27 14:16

from django.db import migrations, models
import django.db.models.deletion
import seahub.base.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Invitation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(db_index=True, max_length=40)),
                ('inviter', seahub.base.fields.LowerCaseCharField(db_index=True, max_length=255)),
                ('accepter', seahub.base.fields.LowerCaseCharField(max_length=255)),
                ('invite_type', models.CharField(choices=[('guest', 'guest'), ('default', 'default')], default='guest', max_length=20)),
                ('invite_time', models.DateTimeField(auto_now_add=True)),
                ('accept_time', models.DateTimeField(blank=True, null=True)),
                ('expire_time', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='RepoShareInvitation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('repo_id', models.CharField(db_index=True, max_length=36)),
                ('path', models.TextField()),
                ('permission', models.CharField(choices=[('r', 'read only'), ('rw', 'read and write')], default='r', max_length=50)),
                ('invitation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='repo_share', to='invitations.invitation')),
            ],
            options={
                'db_table': 'repo_share_invitation',
            },
        ),
    ]
