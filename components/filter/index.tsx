import { Card, Collapse, message, Space } from 'antd';
import React, { ReactElement, useEffect, useState } from 'react';
import { FilterInterface } from './filter';
import FilterItem from './filter-item';

interface FilterPropsInterface {
  loading: boolean;
}
const FilterComponent: React.FC<FilterPropsInterface> = (): ReactElement => {
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<{ [key: string]: FilterInterface }>({});
  const [filterQuery, setFilterQuery] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    fetch('/api/filters')
      .then((response) => {
        response
          .json()
          .then((json) => {
            setFilters(json);
          })
          .catch(() => {
            message.error('Unable to fetch filters!');
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch(() => {
        message.error('There was a problem loading the filter!');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filterQuery]);
  return (
    <Card loading={loading}>
      {filterQuery.length ? (
        <Collapse activeKey={[1]}>
          <Collapse.Panel key={1} showArrow={false} header={<strong>Active Filters</strong>}>
            <Space direction="vertical">
              {filterQuery.map((query) => {
                return (
                  <Space key={query.filter.id + '-' + query.option.id} direction="horizontal">
                    {query.filter.label}
                    <strong>{query.option.label}</strong>
                  </Space>
                );
              })}
            </Space>
          </Collapse.Panel>
        </Collapse>
      ) : (
        'loda'
      )}
      {Object.keys(filters).map((filter: string, key: string | number) => {
        return (
          <FilterItem
            key={key}
            filter={filters[filter]}
            onClick={(object: any) => {
              let filterIndex;
              filterQuery.map((query, index: number) => {
                if (query.label === filters[filter].label) {
                  filterIndex = index;
                }
              });

              if (filterIndex) {
                filterQuery[filterIndex] = object;
              } else {
                filterQuery.push(object);
              }
              setFilterQuery(filterQuery);
            }}
          />
        );
      })}
    </Card>
  );
};
export default FilterComponent;
