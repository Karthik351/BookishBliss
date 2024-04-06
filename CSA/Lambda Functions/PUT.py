import json
import boto3


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Book_table')  

def update_book(book_data):
    
    title = book_data['Title']
    author = book_data['Author']
    genre = book_data['Genre']
    year = book_data['Year']
    
    update_expression = 'SET '
    expression_attribute_values = {}
    expression_attribute_names = {}
    
    if author:
        update_expression += '#a = :author, '
        expression_attribute_values[':author'] = author
        expression_attribute_names['#a'] = 'Author'
    if genre:
        update_expression += '#g = :genre, '
        expression_attribute_values[':genre'] = genre
        expression_attribute_names['#g'] = 'Genre'
    if year:
        update_expression += '#y = :year, '
        expression_attribute_values[':year'] = year
        expression_attribute_names['#y'] = 'Year'
    
    update_expression = update_expression.rstrip(', ')
    
    response = table.update_item(
        Key={
            'Title': title
        },
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ExpressionAttributeNames=expression_attribute_names
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Book updated successfully')
    }

def lambda_handler(event, context):
    return update_book((event['body']))