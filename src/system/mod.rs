/* This file is part of DarkFi (https://dark.fi)
 *
 * Copyright (C) 2020-2023 Dyne.org foundation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

use std::{sync::Arc, time::Duration};

use smol::{Executor, Timer};

/// Condition variable which allows a task to block until woken up
pub mod condvar;
pub use condvar::CondVar;

/// Convenient late initialization of `Weak<Foo>`
pub mod lazy_weak;
pub use lazy_weak::LazyWeak;

/// Implementation of async background task spawning which are stoppable
/// using channel signalling.
pub mod stoppable_task;
pub use stoppable_task::{StoppableTask, StoppableTaskPtr};

/// Simple broadcast (publish-subscribe) class
pub mod subscriber;
pub use subscriber::{Subscriber, SubscriberPtr, Subscription};

/// Async timeout implementations
pub mod timeout;
pub use timeout::io_timeout;

pub type ExecutorPtr = Arc<Executor<'static>>;

/// Sleep for any number of seconds.
pub async fn sleep(seconds: u64) {
    Timer::after(Duration::from_secs(seconds)).await;
}

pub async fn sleep_forever() {
    loop {
        sleep(100000000).await
    }
}

/// Sleep for any number of milliseconds.
pub async fn msleep(millis: u64) {
    Timer::after(Duration::from_millis(millis)).await;
}
