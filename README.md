# useParams Hook Issue in React Router v6

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6.  The `useParams` hook is designed to access route parameters, but it behaves unexpectedly if used outside a component that is a direct child of a route element defined within the `Routes` component.  The solution demonstrates how to correctly access route parameters in nested components.

## Problem

The provided example shows `useParams` used in a component (`MyComponent`) which is not a direct child of a route, leading to an empty or incorrect `params` object.

## Solution

The solution illustrates how to solve this by passing the necessary data as props from the parent component that is a direct child of a route, allowing the nested component to access it correctly.
