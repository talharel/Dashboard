from celery import shared_task

@shared_task(bind=True)
def my_task(self):
    return 'wwww'