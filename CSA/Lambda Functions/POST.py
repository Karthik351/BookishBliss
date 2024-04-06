import json
import boto3


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Book_table')  

def add_book(book_data):
    title = book_data['Title']
    author = book_data['Author']
    genre = book_data['Genre']
    year = book_data['Year']
    
    response = table.put_item(
        Item={
            'Title': title,
            'Author': author,
            'Genre': genre,
            'Year': year
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Book added successfully')
    }
    
def lambda_handler(event, context):
    return add_book(event['body'])