In React Router Dom v6, using the `useParams` hook inside a component that's not directly a child of a route will lead to unexpected behavior.  The `params` object might be empty or contain outdated values.

```javascript
// Buggy Component
function MyComponent() {
  const { id } = useParams(); // This will likely be empty or incorrect
  console.log(id); // Outputs undefined or wrong ID
  return <div>My Component</div>;
}

function ParentComponent() {
  return (
    <Routes>
      <Route path="/items/:id" element={<ItemDetails />} />
      <Route path="/*" element={<MainLayout />}/>
    </Routes>
  );
}

function MainLayout(){
  return(
    <div>
      <MyComponent/>
    </div>
  );
}

function ItemDetails() {
  const { id } = useParams();
  return <div>Item {id}</div>;
}
```