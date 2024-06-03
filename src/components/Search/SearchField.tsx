import Search from 'antd/es/input/Search';
import { memo } from 'react';

interface SearchProps {
    onSearch: (query: string) => void;
}

const SearchField = memo((props: SearchProps) => {
    const { onSearch } = props;
    const onSearchHandler: SearchProps['onSearch'] = (value) => {
        onSearch(value);
        console.log(value);
    };
    return (
        <Search
            placeholder="input search text"
            onSearch={onSearchHandler}
            style={{ width: 300, marginBottom: '10px' }}
            allowClear
        />
    );
});

export { SearchField };
