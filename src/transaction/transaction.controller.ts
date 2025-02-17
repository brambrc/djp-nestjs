import { Controller, Post, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.schema';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(@Body() transaction: Partial<Transaction>) {
    return this.transactionService.createTransaction(transaction);
  }

  @Get()
  async findAll() {
    return this.transactionService.getTransactions();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() transaction: Partial<Transaction>,
  ) {
    return this.transactionService.updateTransaction(id, transaction);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.transactionService.deleteTransaction(id);
  }
}
