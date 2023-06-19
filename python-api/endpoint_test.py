import unittest
import json
from flask import Flask
from flask.testing import FlaskClient

# Import the Flask app defined in the main file
from endpoint import app

class EndpointTest(unittest.TestCase):
    def setUp(self):
        # Set up a test client
        self.client: FlaskClient = app.test_client()

    def test_create_event(self):
        # Prepare the request data
        data = {
            'event_date': '2023-06-20',
            'location': 'New York',
            'title': 'Sample Event',
            'description': 'This is a sample event',
            'category': 'General'
        }

        # Send a POST request to the create_event endpoint
        response = self.client.post('/events', json=data)
        data = json.loads(response.data)

        # Assert the response status code and message
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Event created successfully')

    def test_get_all_events(self):
        # Send a GET request to the get_all_events endpoint
        response = self.client.get('/events')
        data = json.loads(response.data)

        # Assert the response status code and message
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'All events retrieved successfully')

    def test_get_events_by_category(self):
        # Send a GET request to the get_events_by_category endpoint
        response = self.client.get('/events/category/General')
        data = json.loads(response.data)

        # Assert the response status code and message
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Events under category General retrieved successfully')

    def test_get_events_by_location(self):
        # Send a GET request to the get_events_by_location endpoint
        response = self.client.get('/events/location/New%20York')
        data = json.loads(response.data)

        # Assert the response status code and message
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Events in location New York retrieved successfully')

    def test_get_events_by_filter(self):
        # Send a GET request to the get_events_by_filter endpoint with a filter parameter
        response = self.client.get('/events/filter?filter=Sample')
        data = json.loads(response.data)

        # Assert the response status code and message
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Events filtered by Sample retrieved successfully')

    def test_delete_event(self):
        # Send a DELETE request to the delete_event endpoint with an event ID
        response = self.client.delete('/events/1')
        data = json.loads(response.data)

        # Assert the response status code and message
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Event with ID 1 deleted successfully')

if __name__ == '__main__':
    unittest.main()
