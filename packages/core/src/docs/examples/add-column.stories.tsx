import React from "react";
import { DataEditor } from "../../data-editor/data-editor";
import {
    BeautifulWrapper,
    Description,
    MoreInfo,
    useMockDataGenerator,
    defaultProps,
} from "../../data-editor/stories/utils";
import { SimpleThemeWrapper } from "../../stories/story-utils";

export default {
    title: "Glide-Data-Grid/DataEditor Demos",

    decorators: [
        (Story: React.ComponentType) => (
            <SimpleThemeWrapper>
                <BeautifulWrapper
                    title="Add and remove columns"
                    description={
                        <>
                            <Description>You can add and remove columns at your disposal</Description>
                            <MoreInfo>Use the story&apos;s controls to change the number of columns</MoreInfo>
                        </>
                    }>
                    <Story />
                </BeautifulWrapper>
            </SimpleThemeWrapper>
        ),
    ],
};

interface AddColumnsProps {
    columnsCount: number;
}

export const AddColumns: React.FC<AddColumnsProps> = p => {
    const { cols, getCellContent } = useMockDataGenerator(p.columnsCount);

    return (
        <DataEditor
            {...defaultProps}
            rowMarkers="number"
            getCellContent={getCellContent}
            columns={cols}
            rows={10_000}
        />
    );
};
(AddColumns as any).args = {
    columnsCount: 10,
};
(AddColumns as any).argTypes = {
    columnsCount: {
        control: {
            type: "range",
            min: 2,
            max: 200,
        },
    },
};