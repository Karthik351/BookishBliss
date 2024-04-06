import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Book_table')

def delete_book(title):
    response = table.delete_item(
        Key={
            'Title': title
        }
    ) 
    
    return {
        'statusCode': 200,
        'body': json.dumps('Book deleted successfully')
    }

def lambda_handler(event, context):
    
    if 'httpMethod' in event:
        operation = event['httpMethod']
    else:
        return {
            'statusCode': 401,
            'body': json.dumps(operation)
        }
        
    if operation == 'DELETE':
      return delete_book(event['Title'])