```js
initialState = { clicks: 0 };

<div style={{ padding: '2rem' }}>
  <OutsideClick
    style={{ display: 'inline-block' }}
    onClickOutside={() => setState(({ clicks }) => ({ clicks: clicks + 1 }))}
  >
    <div
      style={{
        padding: '1.5rem',
        width: 300,
        backgroundColor: 'whitesmoke',
      }}
    >
      Number of clicks outside this box: {state.clicks}
    </div>
  </OutsideClick>
</div>;
```
