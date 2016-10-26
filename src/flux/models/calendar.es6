import Model from './model';
import Attributes from '../attributes';

/**
Public: The Calendar model represents a Calendar object served by the
Nylas Platform API.  For more information about Calendar on the Nylas
Platform, read the [Calendar API
Documentation](https://nylas.com/cloud/docs#calendars)

## Attributes

`name`: {AttributeString} The name of the calendar.

`description`: {AttributeString} The description of the calendar.

This class also inherits attributes from {Model}

Section: Models
*/
export default class Calendar extends Model {
  static attributes = Object.assign({}, Model.attributes, {
    name: Attributes.String({
      modelKey: 'name',
      jsonKey: 'name',
    }),
    description: Attributes.String({
      modelKey: 'description',
      jsonKey: 'description',
    }),
    readOnly: Attributes.Boolean({
      modelKey: 'readOnly',
      jsonKey: 'read_only',
    }),
  });
}
