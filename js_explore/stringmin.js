const arr = [
    'rajib',
    'rony',
    'parves',
    'rasidul',
  ];
  
  console.log(
    arr.reduce(
      ([min], item) => [
        min.localeCompare(item) > 0
          ? item
          : min,
       
      ],
      [arr[0], arr[0]],
    ),
  );