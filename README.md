# native-x-data-view

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This component conditionally shows data, progress or error based on the status from API. This
wrapper component will provide consistent data handling experience in an application.

## Install

### Yarn

```sh
yarn add native-x-data-view
```

### NPM

```sh
npm install native-x-data-view
```

## Usage

```tsx
import { DataView } from 'native-x-data-view'

function MyComponent() {
  const { data, isLoading, error } = useAPIHook()
  return (
    <DataView data={data} isLoading={isLoading} error={error}>
      ...
    </Stack>
  )
}
```

## API

| Property                                                          | Default Value | Usage                                                     |
| ----------------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| data?: T or null                                                  | -             | Data for the view                                         |
| error?: Error or string or null                                   | false         | Error message                                             |
| showError?: boolean                                               | true          | Show error if exists                                      |
| showEmptyMessage?: boolean                                        | true          | Show empty message if data is empty                       |
| showSpinner?: boolean                                             | true          | Show spinner while the data is being loaded               |
| emptyMessage?: ReactNode or {title?: string, description: string} | true          | Configure message to show when the API returns empty data |

## Configure Empty Message

```tsx
import { DataView } from 'native-x-data-view'

const emptyMessage = {
  title: 'No data',
  description: 'We could not find what you are looking for'
}

function MyComponent() {
  const { data, isLoading, error } = useAPIHook()
  return (
    <DataView data={data} isLoading={isLoading} error={error} emptyMessage={emptyMessage}>
      ...
    </Stack>
  )
}
```

You can also pass on a custom view as empty message

```tsx
import { DataView } from 'native-x-data-view'

function EmptyMessage() {
  return <View>
    <Text>No data</Text>
  </View>
}

function MyComponent() {
  const { data, isLoading, error } = useAPIHook()
  return (
    <DataView data={data} isLoading={isLoading} error={error} emptyMessage={<EmptyMessage />}>
      ...
    </Stack>
  )
}
```

## Configure Error Message

```tsx
import { DataView } from 'native-x-data-view'

const renderError = (error: Error | string | null) => {
  if (!error) {
    return null
  }
  return <View>
    <Text>Custom error view: {error}</Text>
  </View>
}

function MyComponent() {
  const { data, isLoading, error } = useAPIHook()
  return (
    <DataView data={data} isLoading={isLoading} error={error} renderError={renderError}>
      ...
    </Stack>
  )
}
```

## `ErrorMessage` component

```tsx
import { ErrorMessage } from 'native-x-data-view'

function MyComponent() {
  return <ErrorMessage alignCenter>{error}</ErrorMessage>
}
```

## `EmptyMessage` component

```tsx
import { EmptyMessage } from 'native-x-data-view'

function MyComponent() {
  return (
    <EmptyMessage
      title='No data'
      alignLeft={false}
      alignCenter={true}
      alignRight={false}
      alignTop={false}
      alignMiddle={true}
      alignBottom={false}
      titleColor={COLOR.ERROR}
      descriptionColor={COLOR.WARNING}
    >
      {'Error description'}
    </EmptyMessage>
  )
}
```

## Automatic Release

Here is an example of the release type that will be done based on a commit messages:

| Commit message      | Release type          |
| ------------------- | --------------------- |
| fix: [comment]      | Patch Release         |
| feat: [comment]     | Minor Feature Release |
| perf: [comment]     | Major Feature Release |
| doc: [comment]      | No Release            |
| refactor: [comment] | No Release            |
| chore: [comment]    | No Release            |
