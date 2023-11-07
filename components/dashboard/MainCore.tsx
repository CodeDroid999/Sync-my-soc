import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './Chart';

const website = [
    { name: 'January', value: +1230 },
    { name: 'February', value: 751 },
    { name: 'March', value: +471 },
    { name: 'April', value: +280 },
    { name: 'May', value: -42 },
    { name: 'June', value: +78 },
];

const shop = [
    { name: 'January', value: +120 },
    { name: 'February', value: +75 },
    { name: 'March', value: -41 },
    { name: 'April', value: +20 },
    { name: 'May', value: +402 },
    { name: 'June', value: +758 },
];

const app = [
    { name: 'January', value: -123 },
    { name: 'February', value: +731 },
    { name: 'March', value: +431 },
    { name: 'April', value: +280 },
    { name: 'May', value: +37 },
    { name: 'June', value: +74 },
];

const data = [
    {
        category: 'Facebook',
        stat: '1,234',
        data: website,
    },
    {
        category: 'LinkedIn',
        stat: '1,543',
        data: shop,
    },
    {
        category: 'Twitter',
        stat: '2,543',
        data: app,
    },
 
];

export default function MainCore() {
    return (
        <div className="flex md:p-10 bg-blue-800 h-full">
            <Grid numItemsSm={2} numItemsLg={3} className="gap-2 flex ml-auto"> {/* Apply the ml-50 class for left margin */}
                {data.map((item) => (
                    <pre className="bg-foreground/5 rounded-md p-4 ">
                        <Card key={item.category} className="bg-white rounded-lg p-4">
                            <Title className="text-xl font-bold text-gray-800">{item.category}</Title>
                            <Flex justifyContent="start" alignItems="baseline" className="space-x-2 mt-4">
                                <Metric className="text-2xl font-bold text-gray-500">{item.stat}</Metric>
                                <Text className="text-gray-700">Total Followers</Text>
                            </Flex>
                            <Flex className="mt-6">
                                <Text className="font-medium text-black">Month</Text>
                                <Text className="text-right font-medium text-black">Followers+</Text>
                            </Flex>
                            <BarList
                                data={item.data}
                                valueFormatter={(number: number) => Intl.NumberFormat('us').format(number).toString()}
                                style={{ marginTop: '2px', marginBottom: '2px', borderBottom: '1px solid #000' }}
                                className="mt-2 mb-2 text-blue-900"
                            />
                        </Card>
                    </pre>
                ))}
            </Grid>
        </div >
    );
}
