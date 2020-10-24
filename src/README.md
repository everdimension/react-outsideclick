```js
const [clicks, setClicks] = React.useState(0);

<div style={{ padding: '2rem' }}>
  <OutsideClick
    style={{ display: 'inline-block' }}
    onClickOutside={() => setClicks(n => n + 1)}
  >
    <div
      style={{
        padding: '1.5rem',
        maxWidth: 300,
        backgroundColor: 'whitesmoke',
      }}
    >
      Number of clicks outside this box: {clicks}
    </div>
  </OutsideClick>
</div>;
```
