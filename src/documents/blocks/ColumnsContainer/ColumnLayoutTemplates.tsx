import { ColumnsContainerProps } from './ColumnsContainerPropsSchema';
import { Grid } from '@mui/material';


export interface ColumnLayoutTemplate {
  id: string;
  name: string;
  icon: JSX.Element | null;
  columnsCount: 2 | 3;
  columnsGap: number;
  fixedWidths: [number | null, number | null, number | null];
  padding: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

const getColumnIcon = (ratios: number[]) => {
  const gap = 5;
  const containerWidth = 46;
  const total = ratios.reduce((a, b) => a + b, 0);

  return (
    <Grid
      container
      alignItems="center"
      wrap="nowrap"
      style={{ width: containerWidth, height: 20 }}
    >
      {ratios.map((r, idx) => {
        const flex = r / total;

        return (
          <Grid
            item
            key={idx}
            style={{
              display: 'flex',
              flex,
              minWidth: 6,
              marginRight: idx < ratios.length - 1 ? gap : 0,
              boxSizing: 'border-box'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '12px',
                borderRadius: 2,
                border: '1px solid #444',
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export const COLUMN_LAYOUT_TEMPLATES: ColumnLayoutTemplate[] = [
  {
    id: 'one-to-two',
    name: '1:2',
    icon: getColumnIcon([1, 2]),
    columnsCount: 2,
    columnsGap: 16,
    fixedWidths: [10, 20, null],
    padding: { top: 16, bottom: 16, left: 24, right: 24 }
  },
  {
    id: 'two-to-one',
    name: '2:1',
    icon: getColumnIcon([2, 1]),
    columnsCount: 2,
    columnsGap: 16,
    fixedWidths: [20, 10, null],
    padding: { top: 16, bottom: 16, left: 24, right: 24 }
  },
  {
    id: 'two-to-three',
    name: '2:3',
    icon: getColumnIcon([2, 3]),
    columnsCount: 2,
    columnsGap: 16,
    fixedWidths: [20, 30, null],
    padding: { top: 16, bottom: 16, left: 24, right: 24 }
  },
  {
    id: 'one-to-three',
    name: '1:3',
    icon: getColumnIcon([1, 3]),
    columnsCount: 2,
    columnsGap: 16,
    fixedWidths: [10, 30, null],
    padding: { top: 16, bottom: 16, left: 24, right: 24 }
  },
  {
    id: 'three-to-one',
    name: '3:1',
    icon: getColumnIcon([3, 1]),
    columnsCount: 2,
    columnsGap: 16,
    fixedWidths: [30, 10, null],
    padding: { top: 16, bottom: 16, left: 24, right: 24 }
  },
  {
    id: 'three-to-two',
    name: '3:2',
    icon: getColumnIcon([3, 2]),
    columnsCount: 2,
    columnsGap: 16,
    fixedWidths: [30, 20, null],
    padding: { top: 16, bottom: 16, left: 24, right: 24 }
  },
];

export function applyColumnLayoutTemplate(
  currentData: ColumnsContainerProps,
  template: ColumnLayoutTemplate
): ColumnsContainerProps {
  // Preserve existing columns or create empty ones
  const currentColumns = currentData.props?.columns || [
    { childrenIds: [] },
    { childrenIds: [] },
    { childrenIds: [] }
  ];

  return {
    ...currentData,
    style: {
      ...currentData.style,
      padding: template.padding
    },
    props: {
      ...currentData.props,
      columns: currentColumns,
      columnsCount: template.columnsCount,
      columnsGap: template.columnsGap,
      fixedWidths: template.fixedWidths as [number | null, number | null, number | null]
    }
  };
}
