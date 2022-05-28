import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm'
import { ContactInfo } from './contact-info.entity';
import { Employee } from './employee.entity';
import { Task } from './task.entity';

@Entity()
export class Meeting {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    zoomUrl: string;

    @ManyToMany(() => Employee, employee => employee.meetings)
    attendees: Employee[];


}