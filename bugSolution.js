The solution involves passing the parameters as props to the nested component:

```javascript
// Corrected Component
function MyComponent({ itemId }) {
  console.log(itemId); // Outputs the correct ID
  return <div>My Component: Item {itemId}</div>;
}

function ItemDetails() {
  const { id } = useParams();
  return (
    <div>
      <MyComponent itemId={id} />
    </div>
  );
}
```

This approach ensures that the nested component receives the correct parameter, fixing the issue.  Avoid direct usage of `useParams` in components not directly under a route element.