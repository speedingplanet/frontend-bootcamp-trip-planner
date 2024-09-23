# Social Trip Planning app

Application features: Home, Trips, Locations, Friends, Settings

We are focusing on US National Parks as Locations to start with

## Current work

- Locations/Parks
  - List locations
  - Search locations

## Routing setup

- In the project
  - Create a folder for each feature area
    - trips
    - friends
    - locations
    - settings
  - Inside each folder, create a placeholder component for that feature
    - For example, /settings/SettingsManager.tsx
    - /trips/TripsManager.tsx, and so on
    - /src/Home.tsx for the Home view
- In `App.tsx`:
  - Import and use `BrowserRouter`
  - Set up `Routes`
    - Each `Route` element points to an area of the application
    - A `Route` needs a `path` and a component to render
    - Map each route to a feature
    - Point each `Route` in `App` to the appropriate placeholder component
  - Set up `NavLink` elements
    - Points to a `path` in a `Route`.
    - Use the name of the feature as text of the link
- Check things out and see if they work

## Application Types

- Trip

  - id
  - name
  - origin
  - destination or Location
  - transportation info
  - accomodations
  - budget
    - gas
  - packing list
  - startDate
  - endDate
  - duration

- Location / Destination?

  - id
  - name
  - Address
    - street
    - city
    - province
    - country
    - postal code?
  - attractions
  - lat/long?
  - weather / climate
  - events calendar
  - food / drink / restaurants

- Friend / User

  - name
  - phone
  - email
  - Address (as above)
  - friends
  - trips
    - accepted
    - pending

- Settings
  - Friends list
    - Add / invite
    - Remove
  - Profile information
    - Adjusting most personal info like phone and email
  - Light/dark mode
  - Preferred date format
  - Language
  - Favorites
    - Origins
    - Budget default
    - Hotel level / brand / loyalty program / etc.
  - Billing information

## Features list

1. Locations (list/add/edit, but not delete, everyone shares locations)
2. Trip management (add/remove/edit/list)
3. Friend management (list/add/remove/message)
4. Social trips (invite/accept/decline from friends)
5. Maps integration for locations (and by extension, Trips)
6. Basic settings (we can decide on the list of "basics" later)

## Possible views

Friends feed
Messaging?

## Open questions

- Are the open data sets for accomodations like hotels, AirBnB, etc.?
- How about open data for a location?
