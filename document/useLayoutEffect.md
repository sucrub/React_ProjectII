- useEffect : các bước
    1. cập nhật lại state
    2. cập nhật DOM (mutated)
    5. render lại UI
    3. gọi cleanup nếu deps thay đổi
    4. gọi useEffect callback 

- useLayoutEffect: các bước 
    1. cập nhật lại state
    2. cập nhật DOM (mutated)
    3. gọi cleanup nếu deps thay đổi (sync)
    4. gọi useLayoutEffect callback (sync)
    5. render lại UI