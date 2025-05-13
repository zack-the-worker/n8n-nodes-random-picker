import { INodeType, INodeTypeDescription, NodeConnectionType, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

export class RandomPicker implements INodeType {
    description: INodeTypeDescription = {
		"displayName": "Random Picker",
		"name": "randomPicker",
		"description": "Randomly selects an item from an array",
		"icon": "file:randompicker.svg",
		"version": 1,
		"defaults": {
			"name": "Random Picker",
			"color": "#0000FF"
		},
		"group": ["transform"],
		"properties": [
			{
				"displayName": "Items",
				"name": "items",
				"type": "collection",
				"required": true,
				"default": []
			}
		],
		"inputs": [NodeConnectionType.Main],
		"outputs": [NodeConnectionType.Main]
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const item = items[Math.floor(Math.random() * items.length)];
		return [[{ json: { item } }]];
	}
}
