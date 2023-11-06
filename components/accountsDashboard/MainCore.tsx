import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './Chart';

const website = [
    { name: '/home', value: 1230 },
    { name: '/contact', value: 751 },
    { name: '/gallery', value: 471 },
    { name: '/august-discount-offer', value: 280 },
    { name: '/case-studies', value: 78 },
];

const shop = [
    { name: '/home', value: 453 },
    { name: '/imprint', value: 351 },
    { name: '/shop', value: 271 },
    { name: '/pricing', value: 191 },
];

const app = [
    { name: '/shop', value: 789 },
    { name: '/product-features', value: 676 },
    { name: '/about', value: 564 },
    { name: '/login', value: 234 },
    { name: '/downloads', value: 191 },
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
                                <Text className="font-medium text-black">Day</Text>
                                <Text className="text-right font-medium text-black">Followers</Text>
                            </Flex>
                            <BarList
                                data={item.data}
                                valueFormatter={(number: number) => Intl.NumberFormat('us').format(number).toString()}
                                className="mt-2 mb-2 text-blue-900"
                            />
                        </Card>
                    </pre>
                ))}
            </Grid>
        </div >
    );
}
