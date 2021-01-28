import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';

class Table extends React.Component {
    state = {
        filter: {
            logic: "and",
            filters: [
                { field: "ProductName", operator: "contains", value: "Chef" }
            ]
        }
    };
    render() {
        return (
            <Grid
                style={{ height: '420px' }}
                data={filterBy(sampleProducts, this.state.filter)}
                filterable
                filter={this.state.filter}
                onFilterChange={(e) => {
                    this.setState({
                        filter: e.filter
                    });
                }}
            >
                <Column field="ProductID" title="ID" filterable={false} width="60px" />
                <Column field="ProductName" title="Product Name" />
                <Column field="FirstOrderedOn" width="240px" filter="date" format="{0:d}" />
                <Column field="UnitPrice" width="180px" filter="numeric" format="{0:c}" />
                <Column field="Discontinued" width="190px" filter="boolean" />
            </Grid>
        );
    }
}
