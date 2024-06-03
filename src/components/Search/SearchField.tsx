import Search from 'antd/es/input/Search';
import { memo } from 'react';

interface SearchProps {
    onSearch: (searchQuery: string) => void;
}

const SearchField = memo((props: SearchProps) => {
    const { onSearch } = props;
    return (
        <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 300, marginBottom: '10px' }}
            allowClear
        />
    );
});

export { SearchField };
