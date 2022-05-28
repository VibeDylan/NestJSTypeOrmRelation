import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm'
import { Employee } from './employee.entity';

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    /** 
     * Ici je spécifie avec le paramètres {onDelete: 'SET NULL'} que si l'employee est supprimé le champs
     * supprimera la référence a l'employé, et ne fera pas de supprésion en cascade comme l'entité de 
     * contact info. 
     */
    @ManyToOne(() => Employee, employee => employee.tasks, {onDelete: 'SET NULL'})
    employee: Employee;
}