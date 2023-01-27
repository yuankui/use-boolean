# React hook - useBoolean

## Installation 
```sh
npm install redux-commands --save
yarn add redux-commands
```

## Usage

### Basic Usage

```typescript
const toggle = useBoolean(false);

return <Modal 
    visible={toggle.value} 
    onVisibleChange={toggle.setValue} 
    onHide={toggle.setFalsy} 
    onShow={toggle.setTruly}>
    ...
</Modal>
```
