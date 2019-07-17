import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Handle = styled.div`
	width: 20px;
	height: 20px;
	background-color: orange;
	border-radius: 4px;
	margin-right: 8px;
`;

const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	padding: 8px;
	margin-bottom: 8px;
	background-color: ${props =>
		props.isDragDisabled
			? 'blue'
			: props.isDragging
			? 'lightgreen'
			: 'white'};
	/* display: flex; */
`;

export default class Task extends Component {
	render() {
		const isDragDisabled = this.props.task.id === 'task-1';
		return (
			<Draggable
				draggableId={this.props.task.id}
				index={this.props.index}
				isDragDisabled={isDragDisabled}
			>
				{(provided, snapshot) => (
					<Container
						ref={provided.innerRef}
						innerRef={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						isDragging={snapshot.isDragging}
					>
						{/* <Handle {...provided.dragHandleProps} /> */}
						{this.props.task.content}
					</Container>
				)}
			</Draggable>
		);
	}
}
