export class LineChartData{
    title: string
    graphData: Point[]

    constructor(title: string, graphData: Point[]) {
        this.title = title;
        this.graphData = graphData;
    }
}

export class Point {
    x: string
    y: any

    constructor(x: string, y: any) {
        this.x = x;
        this.y = y;
    }
}