import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Book_table') 

def get_books():
    response = table.scan()
    books = response['Items']
    send_data = str(books)
    
    return {
        'statusCode': 200,
        'body': json.dumps(send_data)
    }
    
def lambda_handler(event, context):
    return get_books()