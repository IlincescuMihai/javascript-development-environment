export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "Id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "FirstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "LastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "Email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["Id", "FirstName", "LastName", "Email"]
      }
    }
  },
  "required": ["users"]
};
