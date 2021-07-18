import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { ButtonGroup, InputGroup } from 'react-bootstrap';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faLaptopCode, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const sampleTodo = {
	todo: 'Eat Pie',
	createdOn: '2021-07-15T06:12:04.325Z',
	status: 'scheduled',
	category: 'Food',
	dueBy: 'August 1, 2021',
	order: 1,
	notes: 'We need to get a real good pie. One that has wonderfully delicious apples!',
};

function ToDoCard({ todo }) {
	var createdUtcDate = todo.createdOn;
	var showCreatedLocalDate = new Date(createdUtcDate).toLocaleDateString();

	var dueUtcDate = todo.dueBy;
	var showDueLocalDate = new Date(dueUtcDate).toLocaleDateString();
	return (
		<div>
			<div class='card bg-c-yellow '>
				<div>
					<Card.Body>
						<Row>
							<Col>
								<span className='f-left card-title'>
									{todo.todo} - {todo.dueBy} ({todo.category})
								</span>
							</Col>
							<Col>
								<span className='f-right'>
									<ButtonGroup size='sm'>
										<Button variant='success' className='icon'>
											<FontAwesomeIcon alt='Select' aria-label='Select' icon={faLaptopCode} />
										</Button>
										<Button variant='warning' className='icon'>
											<FontAwesomeIcon alt='Edit' aria-label='Edit' icon={faPencilAlt} />
										</Button>
										<Button variant='danger' className='icon'>
											<FontAwesomeIcon alt='Delete' aria-label='Delete' icon={faTrashAlt} />
										</Button>
									</ButtonGroup>
								</span>
							</Col>
						</Row>
						<Row>
							<Col>
								<span className='f-left notes'>{todo.notes}</span>
							</Col>
						</Row>
						<Row>
							<Col>
								<span className='f-right created-info'>Created: {todo.createdOn}</span>
							</Col>
						</Row>
					</Card.Body>
				</div>
			</div>
		</div>
	);
}

export default ToDoCard;
