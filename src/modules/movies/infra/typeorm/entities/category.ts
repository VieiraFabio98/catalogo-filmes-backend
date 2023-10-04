import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid'


@Entity('categories')
class Category {

    @PrimaryColumn()
    id?: string

    @Column({name: 'category', nullable: true})
    category?: string

    @CreateDateColumn({ name: 'created_at', nullable: true })
    createdAt?: Date

    @UpdateDateColumn({ name: 'updated_at', nullable: true })
    updatedAt?: Date

    constructor() {
        if (!this.id) {
          this.id = uuidV4()
        }
    }
}

export { Category }