import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { Employee } from './employee.entity';

@Entity()
export class ContactInfo {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    phone: string;

    @Column()
    email: string;

    @Column()
    employeeId: number;

    /** 
     * Ici je spécifie avec ce paramètres : { onDelete: 'CASCADE'} que si l'employé a était supprimé, 
     * le contact info sera lui aussi supprimé. 
     */
    @OneToOne(() => Employee, employee => employee.contactInfo, { onDelete: 'CASCADE'})
    @JoinColumn()
    employee: Employee;
}