# React.memo useMemo useCallback

## React.memo

```Typescript
const SampleComponent = () => {
  return (
    <div>
      サンプルコンポーネント
    </div>
  );
}
```

```Typescript
const SampleComponent = React.memo(() => {
  return (
    <div>
      サンプルコンポーネント
    </div>
  );
})
```

中身を`React.memo`でラップすることで親コンポーネントがレンダリングされた際に子コンポーネントも一緒にレンダリングされてしまうのを防ぐ

## useMemo

```Typescript


const double = (count: number) => {
    let i = 0;
    while (i < 30000000) {
      i++;
    }
    return count * 2;
  };
  const doubleCount = double(count);
```

引数に渡された数に 2 を掛ける関数`double`があります。
その関数を使って定数`doubleCount`に渡しています。

この渡す時の処理は親コンポーネントがレンダリングされる度に`double()`が走ります。
特定の状態が変更された時に走らせるために`useMemo`を使う。

```Typescript
const double = (count: number) => {
    let i = 0;
    while (i < 30000000) {
      i++;
    }
    return count * 2;
  };
  const doubleCount = useMemo(() => double(count), [count]);
```

この例では第 2 引数に渡されている`count`が変更された時に`double()`が走ります。

## useCallback

`useMemo`とほとんど同じ
