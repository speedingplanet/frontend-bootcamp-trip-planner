# Social Trip Planning app

Application features: Home, Trips, Locations, Friends, Settings

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
