import { Column, Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm'
import { ContactInfo } from './contact-info.entity';
import { Task } from './task.entity';

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @ManyToOne(() => Employee, employee => employee.directReports, {onDelete: 'SET NULL'})
    manager: Employee;

    @OneToMany(() => Employee, employee => employee.manager)
    directReports: Employee[];

    @OneToOne(() => ContactInfo, contactInfo => contactInfo.employee )
    contactInfo: ContactInfo;

    @OneToMany(() => Task, task => task.employee)
    tasks: Task[];
}