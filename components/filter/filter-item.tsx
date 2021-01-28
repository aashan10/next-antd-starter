import { Button, Checkbox, Collapse, Slider, Space } from 'antd';
import React, { ReactElement, useState } from 'react';
import { FilterInterface } from './filter';

interface FilterItemInterface {
  filter: FilterInterface;
  onClick: CallableFunction;
  key: string | number;
  appliedValue?: {
    option?: {
      id: string | number;
      label: string;
    };
    min?: number;
    max?: number;
  };
}

const FilterItem: React.FC<FilterItemInterface> = (props: FilterItemInterface): ReactElement => {
  const { label, type, options, min, max } = props.filter;
  const [applied, setApplied] = useState({});
  const onClick = (option: any): void => {
    props.onClick({ filter: props.filter, option: option });
    setApplied(option);
  };
  return (
    <Collapse ghost defaultActiveKey={[1]}>
      <Collapse.Panel showArrow={true} key={1} header={<strong>{label}</strong>}>
        {type === 'button' ? (
          <Space direction="horizontal">
            {options?.map((option) => {
              return (
                <Button
                  key={option.id}
                  type={'default'}
                  className=""
                  style={option.styles}
                  onClick={() => onClick(option)}
                >
                  {option.showLabel ? option.label : ' '}
                </Button>
              );
            })}
          </Space>
        ) : (
          ''
        )}

        {type === 'checkbox' ? (
          <Space direction="vertical">
            {options?.map((option) => {
              return (
                <Checkbox
                  key={option.id}
                  className=""
                  checked={option === applied}
                  style={option.styles}
                  onClick={() => onClick(option)}
                >
                  {option.label ?? ' '}
                </Checkbox>
              );
            })}
          </Space>
        ) : (
          ''
        )}

        {type === 'slider' ? (
          <>
            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <a>{min}</a>
              <a>{max}</a>
            </div>
            <Slider
              min={min}
              max={max}
              onAfterChange={(event) => {
                const [min, max] = event;
                onClick({ min: min, max: max });
              }}
              range
              defaultValue={[min ?? 0, max ?? 0]}
            />
          </>
        ) : (
          ''
        )}
      </Collapse.Panel>
    </Collapse>
  );
};

export default FilterItem;
